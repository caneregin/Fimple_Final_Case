# Fimple Final Case

## Yayınlandı: "eklenecek"

## Açılış Ekranı
![openingscreen](https://user-images.githubusercontent.com/36435160/190898301-b5d04386-79df-4f5c-8e79-e9e99dd0fc44.png)

## Örnek Bileşik Aylık Hesaplama Girişi
![finalcase1](https://user-images.githubusercontent.com/36435160/190898271-3eaa749e-4343-4f7f-a672-db9753739816.png)

## Örnek Bileşik Aylık Hesaplama Görüntülenmesi
![finalcase2](https://user-images.githubusercontent.com/36435160/190898338-93d56df9-38ea-4e15-a045-bc632489bbfd.png)

## Örnek Basit Aylık Hesaplama Girişi
![finalcase3](https://user-images.githubusercontent.com/36435160/190898371-9f850273-80aa-4d42-ac92-0b5990986e39.png)

## Örnek Basit Aylık Hesaplama Görüntülenmesi
![finalcase4](https://user-images.githubusercontent.com/36435160/190898384-4dbfd1e8-3505-4b97-8b7a-b656eb2b6571.png)

## Bileşik Aylık Hesaplama Girişi
![finalcase5](https://user-images.githubusercontent.com/36435160/190898411-4623c5f4-f3f1-4b83-998e-cd4d30e1a4a4.png)

## Bileşik Aylık Hesaplama Görüntülenmesi
![finalcase6](https://user-images.githubusercontent.com/36435160/190898420-48a89adc-6943-4b9f-a9b5-35ef51760c2b.png)

## Bileşik Haftalık Hesaplama Girişi
![finalcase7](https://user-images.githubusercontent.com/36435160/190898470-f8a1de16-74d4-47a2-bd98-8675b06ab931.png)

## Bileşik Haftalık Hesaplama Görüntülenmesi
![finalcase8](https://user-images.githubusercontent.com/36435160/190898485-ce9a6758-0929-45f5-ac6e-0182c435b26a.png)

## Bileşik Yıllık Hesaplama Girişi
![finalcase9](https://user-images.githubusercontent.com/36435160/190898502-5440da76-cf43-45ad-88ab-9c325428728e.png)

## Bileşik Yıllık Hesaplama Görüntülenmesi
![finalcase10](https://user-images.githubusercontent.com/36435160/190898521-09fac007-7feb-4a13-baef-a5ce14cedaf3.png)

## Formik & YUP form doğrulaması
![finalcase12](https://user-images.githubusercontent.com/36435160/190898536-0f715d15-b96f-45ec-887e-dc9151e9a7b4.png)

## FormComponent tanımlamaları - useRef ve useContext kullanımı
![finalcase11](https://user-images.githubusercontent.com/36435160/190898577-86a5e6aa-fea9-4fc7-a9a0-21da3e2c25d8.png)

## Form içerisine değerler girildikten sonra Görüntüle (onSubmit) butonuna tıklandığında her bir değer kaydedilir ve Child Popup component içerisindeki fonksiyon çalıştırılır ve Popup penceresi açılır.
![finalcase13](https://user-images.githubusercontent.com/36435160/190898653-b53afeda-4d76-472d-9c5f-21b216207108.png)

## Butona tıklandığında değerler artık null değildir ve değişmiştir. Böylece ilgili useEffect tetiklenir ve hesaplama yapılıp setData aracılığıyla data içerisine kaydedilir. Compound seçiliyse buradaki if çalışır. Gerekirse Aylıktan yıllığa, yıllıktan aylığa, aylıktan haftalığa formülleri yorum içerisine yazılmıştır.
![finalcase14](https://user-images.githubusercontent.com/36435160/190898762-7fd1f238-f6f4-4b29-a6fe-9866ff22e237.png)

## Butona tıklandığında simple seçiliyse buradaki if çalışır ve aynı işlemler yapılır.
![finalcase15](https://user-images.githubusercontent.com/36435160/190898779-869f855e-b01d-46e1-b819-b4f8f71c2eb7.png)

## Form doğrulama kuralları
![finalcase16](https://user-images.githubusercontent.com/36435160/190898806-91a63193-0f22-4d2e-8424-9ab214a00444.png)

## Formik içerisinde doğrulama yapılacak değerler initial value olarak verilmiştir. İlk değerleri useRef aracılığıyla current.value'den gelen değerlerdir. onSubmit yapıldığında yukarıda söz edilen fonksiyon çalışır.
![finalcase17](https://user-images.githubusercontent.com/36435160/190898845-c4c5c761-e468-41a2-904f-59501511f3a1.png)

## Form içerisindeki tanım yazıları
![finalcase18](https://user-images.githubusercontent.com/36435160/190898872-088d5d9c-47ee-446f-b531-f250cd807039.png)

## Custom Input yapılmıştır. Input fonksiyonu burada her bir input için çalıştırılır. Input içeriğine name placeholder prop olarak verilir. ref verilerek useRef kullanılır.
![finalcase19](https://user-images.githubusercontent.com/36435160/190898931-95f42c79-3f6e-4ee7-b945-ec8f41208ba4.png)

## Custom Input Component - forwardRef kullanılmıştır. Parent'tan gelen ref ve props bilgisi alınır. Bilgiler input içerisinde tanımlanmıştır.
![finalcase20](https://user-images.githubusercontent.com/36435160/190898958-58be50ec-f384-43bf-99e9-7aef3225f5ac.png)

## PopUp Component - Parent'tan gönderilen callChildFunction isteği burada karşılanır. forwardRef ile ref bilgisi alınır. useImperativeHandle kullanılarak parent'tan child içerisindeki fonksiyon çalıştırılır.
![finalcase21](https://user-images.githubusercontent.com/36435160/190899045-5ffdc2a4-fd69-4bdd-87c8-141e7249f6b6.png)

## data içerisine kaydedilen veriler burada map edilir. 
![finalcase22](https://user-images.githubusercontent.com/36435160/190899099-53f54847-7c9e-4db1-bf85-da9e2594615c.png)

## 3 React Context kullanılmıştır. Bunlar InputContext, DataContext ve PopUpContext olarak tanımlanmıştır.
![finalcase28](https://user-images.githubusercontent.com/36435160/190899156-ad61e4de-c11b-4c25-bd8e-f3c3a12f2775.png)

## InputContext - input değerlerinin kaydedildiği context
![finalcase25](https://user-images.githubusercontent.com/36435160/190899179-e7e0b2cc-184a-4f7d-b85a-2a7a56c023bb.png)

## DataContext - Hesaplanan verinin kaydedilmesinin yer aldığı context
![finalcase26](https://user-images.githubusercontent.com/36435160/190899212-d42f57f6-df9a-4b53-bd3e-e9daab491554.png)

## PopUpContext - PopUp ekranda belirme ve belirmeme olayının olduğu context
![finalcase27](https://user-images.githubusercontent.com/36435160/190899223-0f30a9a8-21ef-46ee-89fd-75fe2994920b.png)

## Header içeriği
![finalcase23](https://user-images.githubusercontent.com/36435160/190899105-b0a14af0-dc3d-47f7-8089-b2d43090a0e1.png)

## Footer içeriği
![finalcase24](https://user-images.githubusercontent.com/36435160/190899108-fe14e945-c003-4acb-a899-13c9117862c8.png)
