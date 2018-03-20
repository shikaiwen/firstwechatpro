//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    infoList:[{
      id:"1",
      title:"旅行について",
      content: "先日社員旅行については、アンケートをご記入頂き、ありがとうございました。統計結果としては、３/31～4/1（土、日）１泊２日のは多数ですで、旅行日は３/31～4/1（土、日）予定になり、プランが二つがあります。その日に参加できる方がプランを選択くだいさい。締切日は本日（１９日）の夜11時迄です。ご協力お願いいたします。ぜひ参加してくださいね  https://densuke.biz/list?cd=PCdqVquXKVvKUmLV",
      open:false
    },{
      id: "2",
      title: "ストレスチェック実施のご案内",
      content: "ストレスチェック実施のご案内（WEB実施）"
      +"・実施期間　2018/3/19(月)～3/25(日)"
      +"・ログインID、バスワード情報を個人で横川に連絡してください。"
      +"・ログイン後、必ず先にバスワードを変更お願いします。"
      +"・登録最後の画面、結果中に表示しているの＜情報の開示＞をクリックしてください。",
      open: false
    }],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  showOrHide:function(e){
    var id = e.currentTarget.id;
    var predata = this.data;
    predata.infoList.map(function(v){
        if(v.id == id){
          v.open = !v.open;
        }
    });
    this.setData(predata);

  },
  //事件处理函数
  bindViewTap: function() {


  },
  onLoad: function () {

  }

})
