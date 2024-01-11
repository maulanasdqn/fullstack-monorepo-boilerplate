{ inputs, pkgs, ... }:

let
  sdk = (import inputs.android-nixpkgs { }).sdk (sdkPkgs:
    with sdkPkgs; [
      build-tools-34-0-0
      cmdline-tools-latest
      platform-tools
      platforms-android-34
      extras-google-google-play-services
      tools
    ]);
in {
  packages = with pkgs; [
    git
    bun
    nodejs
    ruby
    jdk
    watchman
    (writeScriptBin "helpme" ''
      __usage="
      👋 Welcome to fullstack-monorepo-boilerplate development environment. 🚀
      If you see this message, it means your are inside the Nix shell ❄️.

      [Info]===============================================================>
      Env:
        - JAVA_HOME:        $JAVA_HOME
        - ANDROID_HOME:     $ANDROID_HOME
        - ANDROID_SDK_ROOT: $ANDROID_SDK_ROOT
        - ANDROID_NDK_ROOT: $ANDROID_NDK_ROOT

      Android Emulator:
        - name:     -
        - packages: -

      Android SDK packages:   -
        - build-tools:        -
        - platforms-android:  -
        - ndk:                -

      Command available:
        - start:            start the project 🛹
        - create-emulator:  create emulator (default: android)
        - align-emulator:   align dev environment with AVD configurations
        - gen-properties:   generate local.properties in <currentDir>/android
        - helpme:           show this messages

      Report/Help:
        - https://github.com/maulanasdqn/fullstack-monorepo-boilerplate
      [Info]===============================================================>
      "
      echo "$__usage"
    '')

    (writeScriptBin "start-web-landing" ''
      bun web:landing:dev
    '')

    (writeScriptBin "build-web-landing" ''
      bun web:landing:build
    '')

    (writeScriptBin "start-web-backoffice" ''
      bun web:backoffice:dev
    '')

    (writeScriptBin "build-web-backoffice" ''
      bun web:backoffice:build
    '')

    (writeScriptBin "start-mobile-client" ''
      bun mobile:client:dev
    '')

    (writeScriptBin "start-mobile-technician" ''
      bun mobile:technician:dev
    '')
  ];

  enterShell = ''
    export PATH="${sdk}/bin:$PATH"
    export JAVA_HOME="${sdk}/jdk"
    export ANDROID_NDK_ROOT="${sdk}/ndk"
    ${(builtins.readFile "${sdk}/nix-support/setup-hook")}
    helpme
  '';

  languages.typescript.enable = true;

  services.postgres = with pkgs; {
    enable = true;
    package = postgresql_15;
    initialDatabases = [{ name = "fullstack-monorepo-db"; }];
  };

}
