# Sezar şifre çözücüsü

Uygulama iki argüman alır. ilki metin dosyası, ikincisi ise kaydırma değeridir.

`npm run decode .\files\text.txt 14`

Eğer kaydırma değerini verilmez ise brute force modda çalışır. Sadece ilk kelime kullanılır:

```shell
npm run decode .\files\task.txt .\files\shift.txt 14

Shift value: 0 FQNDUWXQD
Shift value: 1 GROEVXYRE
Shift value: 2 HSPFWYZSF
Shift value: 3 ITQGXZATG
Shift value: 4 JURHYABUH
Shift value: 5 KVSIZBCVI
Shift value: 6 LWTJACDWJ
Shift value: 7 MXUKBDEXK
Shift value: 8 NYVLCEFYL
Shift value: 9 OZWMDFGZM
Shift value: 10 PAXNEGHAN
Shift value: 11 QBYOFHIBO
Shift value: 12 RCZPGIJCP
Shift value: 13 SDAQHJKDQ
Shift value: 14 TEBRIKLER # Doğru değer.
Shift value: 15 UFCSJLMFS
Shift value: 16 VGDTKMNGT
Shift value: 17 WHEULNOHU
Shift value: 18 XIFVMOPIV
Shift value: 19 YJGWNPQJW
Shift value: 20 ZKHXOQRKX
Shift value: 21 ALIYPRSLY
Shift value: 22 BMJZQSTMZ
Shift value: 23 CNKARTUNA
Shift value: 24 DOLBSUVOB
Shift value: 25 EPMCTVWPC

npm run decode .\files\text.txt 14

TEBRIKLER DOGRU SECIM.
```

> Alphabet referance: English alphabet.
> İngilizce alfabesi referans alınmıştır.
