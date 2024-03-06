*   models
    -   跟資料庫溝通的窗口，export 用class實現
    -   prisma+mySQL
*   controllers
    -   把商業邏輯組合起來
*   services
    -   商業邏輯:把東西家到購物車之類的，跟這個產品本身有關的東東


controller用service的東西
service用model的東西

class可以做Obj
export default->不用取名字
prisma改欄位->npx prisma db push(改db)->npx prisma generate(改node modules 裡面的東西)


jwt
帳密加密後主機發對應的token給client，之後client就用這組token去打各個API

npx eslint --fix . <-重新排版所有檔案


tsoa.json
只是產生swagger時候用的，沒有實質效果，具體還是要去auth裡面改