let url = "https://github.com/NixOS/nixpkgs/archive/2d10e73416ec1449ef74aeac7faf2cf8c556ff5a.tar.gz";
in { pkgs ? import (fetchTarball url) { } }:
with pkgs; mkShell {
  nativeBuildInputs = [
    html-tidy
  ];
  buildInputs = [
    darkhttpd
  ];
}
