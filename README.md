# Fimple Final Case

## Yayınlandı: https://63275d18748e56688218d296--zingy-swan-15fca8.netlify.app/

## Açılış Ekranı
![openingscreen](https://user-images.githubusercontent.com/36435160/190898301-b5d04386-79df-4f5c-8e79-e9e99dd0fc44.png)

## Örnek Bileşik Aylık Hesaplama Girişi
![finalcase1](https://user-images.githubusercontent.com/36435160/190898271-3eaa749e-4343-4f7f-a672-db9753739816.png)

## Örnek Bileşik Aylık Hesaplama Görüntülenmesi
![finalcase2](https://user-images.githubusercontent.com/36435160/190900789-0e4575c0-41fc-4d8d-adfa-b4667bba237e.png)

## Örnek Basit Aylık Hesaplama Girişi
![finalcase3](https://user-images.githubusercontent.com/36435160/190898371-9f850273-80aa-4d42-ac92-0b5990986e39.png)

## Örnek Basit Aylık Hesaplama Görüntülenmesi
![finalcase4](https://user-images.githubusercontent.com/36435160/190900796-7a6b7c5b-beb3-4516-a5bc-da1d1b61a410.png)

## Bileşik Aylık Hesaplama Girişi
![finalcase5](https://user-images.githubusercontent.com/36435160/190898411-4623c5f4-f3f1-4b83-998e-cd4d30e1a4a4.png)

## Bileşik Aylık Hesaplama Görüntülenmesi
![finalcase6](https://user-images.githubusercontent.com/36435160/190900808-bdbc6696-18cc-49bc-a244-086216875589.png)

## Bileşik Haftalık Hesaplama Girişi
![finalcase7](https://user-images.githubusercontent.com/36435160/190898470-f8a1de16-74d4-47a2-bd98-8675b06ab931.png)

## Bileşik Haftalık Hesaplama Görüntülenmesi
![finalcase8](https://user-images.githubusercontent.com/36435160/190900821-3f3c0572-167c-4166-81e8-425920232ba7.png)

## Bileşik Yıllık Hesaplama Girişi
![finalcase9](https://user-images.githubusercontent.com/36435160/190898502-5440da76-cf43-45ad-88ab-9c325428728e.png)

## Bileşik Yıllık Hesaplama Görüntülenmesi
![finalcase10](https://user-images.githubusercontent.com/36435160/190900828-07fd0b68-8eb8-4800-a41e-9252ffa5f0ea.png)

## Formik & YUP form doğrulaması
![finalcase12](https://user-images.githubusercontent.com/36435160/190898536-0f715d15-b96f-45ec-887e-dc9151e9a7b4.png)

## FormComponent tanımlamaları - useRef ve useContext kullanımı
![finalcase11](https://user-images.githubusercontent.com/36435160/190900840-53db1f4d-1a7a-4c20-b5bd-248ab6d19940.png)

## Form içerisine değerler girildikten sonra Görüntüle (onSubmit) butonuna tıklandığında her bir değer kaydedilir ve Child Popup component içerisindeki fonksiyon çalıştırılır ve Popup penceresi açılır.
![finalcase13](https://user-images.githubusercontent.com/36435160/190900853-52c8a73d-d6ec-43d6-b4df-52c641238a15.png)

## Butona tıklandığında değerler artık null değildir ve değişmiştir. Böylece ilgili useEffect tetiklenir ve hesaplama yapılıp setData aracılığıyla data içerisine kaydedilir. Compound seçiliyse buradaki if çalışır. Gerekirse Aylıktan yıllığa, yıllıktan aylığa, aylıktan haftalığa formülleri yorum içerisine yazılmıştır.
![finalcase14](https://user-images.githubusercontent.com/36435160/190900860-8d8886bf-8650-4a9d-802b-0d4ea13392b0.png)

## Butona tıklandığında simple seçiliyse buradaki if çalışır ve aynı işlemler yapılır.
![finalcase15](https://user-images.githubusercontent.com/36435160/190900864-48c9fee3-c61d-4dbc-a9b2-cd83f1ba96f1.png)

## Form doğrulama kuralları
![finalcase16](https://user-images.githubusercontent.com/36435160/190900871-46021577-12f6-4c40-90f6-e5afd2eb5f13.png)

## Formik içerisinde doğrulama yapılacak değerler initial value olarak verilmiştir. İlk değerleri useRef aracılığıyla current.value'den gelen değerlerdir. onSubmit yapıldığında yukarıda söz edilen fonksiyon çalışır.
![finalcase17](https://user-images.githubusercontent.com/36435160/190900874-489bd63a-0b5e-445d-a591-f26d22b13581.png)

## Form içerisindeki tanım yazıları
![finalcase18](https://user-images.githubusercontent.com/36435160/190900883-8c4d5d04-860c-4ccc-8f06-6bea64359877.png)

## Custom Input yapılmıştır. Input fonksiyonu burada her bir input için çalıştırılır. Input içeriğine name placeholder prop olarak verilir. ref verilerek useRef kullanılır.
![finalcase19](https://user-images.githubusercontent.com/36435160/190900887-b3c4bb0e-3a61-41d2-b63a-89a271743120.png)

## Custom Input Component - forwardRef kullanılmıştır. Parent'tan gelen ref ve props bilgisi alınır. Bilgiler input içerisinde tanımlanmıştır.
![finalcase20](https://user-images.githubusercontent.com/36435160/190898958-58be50ec-f384-43bf-99e9-7aef3225f5ac.png)

## PopUp Component - Parent'tan gönderilen callChildFunction isteği burada karşılanır. forwardRef ile ref bilgisi alınır. useImperativeHandle kullanılarak parent'tan child içerisindeki fonksiyon çalıştırılır.
![finalcase21](https://user-images.githubusercontent.com/36435160/190900898-5c692fa5-fdcd-4be3-a123-7fcd1657e0dc.png)

## data içerisine kaydedilen veriler burada map edilir. 
![finalcase22](https://user-images.githubusercontent.com/36435160/190900902-4eaa6c6f-de2d-4dda-80a7-d7ae7036e87c.png)

## 3 React Context kullanılmıştır. Bunlar InputContext, DataContext ve PopUpContext olarak tanımlanmıştır.
![finalcase28](https://user-images.githubusercontent.com/36435160/190899156-ad61e4de-c11b-4c25-bd8e-f3c3a12f2775.png)

## InputContext - input değerlerinin kaydedildiği context
![finalcase25](https://user-images.githubusercontent.com/36435160/190899179-e7e0b2cc-184a-4f7d-b85a-2a7a56c023bb.png)

## DataContext - Hesaplanan verinin kaydedilmesinin yer aldığı context
![finalcase26](https://user-images.githubusercontent.com/36435160/190900905-ea00bb5c-82c5-4787-84d5-c7a7aa1b0273.png)

## PopUpContext - PopUp ekranda belirme ve belirmeme olayının olduğu context
![finalcase27](https://user-images.githubusercontent.com/36435160/190899223-0f30a9a8-21ef-46ee-89fd-75fe2994920b.png)

## Header içeriği
![finalcase23](https://user-images.githubusercontent.com/36435160/190899105-b0a14af0-dc3d-47f7-8089-b2d43090a0e1.png)

## Footer içeriği
![finalcase24](https://user-images.githubusercontent.com/36435160/190899108-fe14e945-c003-4acb-a899-13c9117862c8.png)
