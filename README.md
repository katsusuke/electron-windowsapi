# これは
32bit windows で ffi を使ってMessageBoxW 巻数を呼び出すテスト

# 前提条件
Windows 7 32bit, 64bit で動作確認済

# 先に入れる
node-gyp という、ネイティブアプリのビルドツールで VisualStudioとPythonを必要とするので先にインストールする

## Python
2.7.11 32bit
python-2.7.11.msi でインストール(chocolateyは動かなかった)

### PATHなどを通す
PATH=C:\Python27
PYTHONHOME=C:\Python27
PYTHONPATH=C:\Python27\Lib

## Visual Studio Express 2013 for Desktop
Visual Studio Express 2013 for Desktop
これもChocolatey無しでインストール

# nodejs
nodejs v4.4.5 32bit
node-v4.4.5-x86.msi でインストールした
(chocolatey にパッケージが見つからなかったため)

# 単体起動
```
> cd electron_practice
> npm install

rem electron はnpm が動作するnodejs とは別の環境で動作するため(デフォルトはx86_64)、electron内部のnodejsを別のバージョンに(win32)切り替える
> node_modules\.bin\electron-rebuild
> node_modules\.bin\electron .
```

# exe作成
```
> node_modules\.bin\electron-packager . TestApp --platform=win32 --arch=ia32
Packaging app for platform win32 ia32 using electron v1.2.0
Wrote new app to C:\Users\k-shimizu\git\electron_practice\TestApp-win32-ia32
```
