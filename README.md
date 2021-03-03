### Takip Sistemi

Discord üzerinde istediğiniz kişileri gizlice takip etmek artık daha kolay.


# Kurulum


- Öncelikle kendinize bir fake hesap oluşturun ve ardından discord CTRL + SHIFT + I kombinasyonu > Network > Filter : token > Orada çıkan tokeni kopyalayın ve ayarlar.json'a yapıştırın.

- Takip etmek istediğiniz kişinin olduğu tüm sunuculara girin, sunuculara kayıt olmanıza gerek yoktur. Cezalı rolü bile olsa yeterli.

- Fake hesabınızdan bir sunucu oluşturun ve ana hesabınızı oraya davet edin. Bu kurduğunuz sunucu üzerinde fake hesabınız ile takip ettiğiniz kişinin etkinliklerini "mesaj" olarak depolayacaksınız.

# Ayarlamalar
**Index.js üzerinde yapmanız gereken değişiklikler;**
1. CTRL + F kombinasyonunu kullanarak `" SUNUCU IDNIZ "` ve `" KANAL IDNIZ "` kelimelerini aratın ve kendinize göre değiştirin.
2. CTRL + F kombinasyonunu kullanarak `" takip etmek istediğiniz isim "` cümlesini aratın ve kendinize göre değiştirin.


**Ayarlar.json üzerinde yapmanız gereken değişiklikler;**

1. `Token : "tokeniniz"` değerini değiştirin ve kendi fake hesabınızın tokenini girin.




