param(
  [string]$SourceUrl = "http://127.0.0.1:3000/"
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
$outputDirectory = Join-Path $projectRoot "dist\manual-vercel"
$publicDirectory = Join-Path $projectRoot "public"
$compiledCss = Get-ChildItem -LiteralPath (Join-Path $projectRoot "dist\client\_next\static\css") -Filter "*.css" | Select-Object -First 1

if (-not $compiledCss) {
  throw "Derlenmiş CSS bulunamadı. Önce npm run build çalıştırın."
}

New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

$response = Invoke-WebRequest -UseBasicParsing $SourceUrl
$html = $response.Content
$html = [regex]::Replace($html, '<link rel="modulepreload"[^>]*>', '')
$html = [regex]::Replace($html, '<script(?:\s[^>]*)?>.*?</script>', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
$html = [regex]::Replace(
  $html,
  '<link rel="stylesheet" href="/_next/static/css/[^"]+"[^>]*/>',
  '<link rel="stylesheet" href="/style.css"/>'
)
$html = $html.Replace('</body>', '<script src="/script.js" defer></script></body>')

$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText((Join-Path $outputDirectory "index.html"), $html, $utf8)
Copy-Item -LiteralPath $compiledCss.FullName -Destination (Join-Path $outputDirectory "style.css") -Force

$script = @'
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav-links');
const progress = document.querySelector('.progress');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

window.addEventListener('scroll', () => {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = available > 0 ? window.scrollY / available : 0;
  if (progress) progress.style.transform = `scaleX(${ratio})`;
}, { passive: true });
'@
[System.IO.File]::WriteAllText((Join-Path $outputDirectory "script.js"), $script, $utf8)

$assets = @(
  "berlitz-english-level-2-preview.png",
  "data-science-certificate.png",
  "kamp-plus-bilisim-kampi-sertifikasi.png",
  "favicon.svg",
  "github.svg",
  "linkedin.svg"
)

foreach ($asset in $assets) {
  Copy-Item -LiteralPath (Join-Path $publicDirectory $asset) -Destination (Join-Path $outputDirectory $asset) -Force
}

Write-Output $outputDirectory
