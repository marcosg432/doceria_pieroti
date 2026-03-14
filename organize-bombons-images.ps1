# Script para organizar 8 imagens de bombons da raiz para images/bombons-tradicionais/
# Coloque as 8 imagens na raiz do projeto e execute: .\organize-bombons-images.ps1

$root = "c:\Projetos\cardapio_pierotti"
$dest = "$root\images\bombons-tradicionais"
$imgs = Get-ChildItem $root -File | Where-Object { $_.Extension -match '\.(webp|jpg|jpeg|png)$' } | Select-Object -First 8

if ($imgs.Count -lt 8) {
    Write-Host "Encontradas $($imgs.Count) imagens. Sao necessarias 8 imagens na raiz do projeto."
    exit 1
}

1..8 | ForEach-Object {
    $i = $_
    $src = $imgs[$i-1].FullName
    $newName = "bombom-tradicional-{0:D2}.webp" -f $i
    $destPath = Join-Path $dest $newName
    if ($src -ne $destPath) {
        Copy-Item $src $destPath -Force
        if ($src -notlike "$dest\*") { Remove-Item $src -Force }
        Write-Host "OK: $newName"
    }
}
Write-Host "Pronto! 8 imagens organizadas em images/bombons-tradicionais/"
