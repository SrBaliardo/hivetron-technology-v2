$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$fontFolder = Join-Path $projectRoot 'public/fonts'
New-Item -ItemType Directory -Path $fontFolder -Force | Out-Null
$fontFiles = @{
  'manrope-latin.woff2' = 'https://fonts.gstatic.com/s/manrope/v23/xn7gYHE41ni1AdIRggexSg.woff2'
  'space-grotesk-latin.woff2' = 'https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2'
  'Manrope-OFL.txt' = 'https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/OFL.txt'
  'SpaceGrotesk-OFL.txt' = 'https://raw.githubusercontent.com/google/fonts/main/ofl/spacegrotesk/OFL.txt'
}
foreach ($file in $fontFiles.GetEnumerator()) {
  Invoke-WebRequest -Uri $file.Value -OutFile (Join-Path $fontFolder $file.Key) -UseBasicParsing
}
Get-ChildItem -LiteralPath $fontFolder | Select-Object Name, Length
