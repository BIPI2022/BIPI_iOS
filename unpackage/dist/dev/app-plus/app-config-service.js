
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Sign_in/Sign_in","pages/Sign_up/Sign_up","pages/Home/Home","pages/Sign_up/Borrower_Sign_up","pages/Sign_up/Sign_Up_Successful","pages/Sign_up/Builder_Sign_up_0","pages/Sign_up/Builder_Sign_up_1","pages/Sign_up/Builder_Sign_up_2","pages/Sign_up/Training_Org_Sign_Up","pages/Home/My"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"BIPI","navigationBarBackgroundColor":"#F28500","backgroundColor":"#383838"},"tabBar":{"color":"#ffffff","selectedColor":"#414759","borderStyle":"414759","backgroundColor":"#f28500","list":[{"pagePath":"pages/Home/Home","iconPath":"/static/home-unselected.png","selectedIconPath":"/static/home-selected.png","text":"Projects"},{"pagePath":"pages/Home/My","iconPath":"/static/my-unselected.png","selectedIconPath":"/static/my-selected.png","text":"My"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"BIPI_v1","compilerVersion":"3.6.4","entryPagePath":"pages/Sign_in/Sign_in","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Sign_in/Sign_in","meta":{"isQuit":true},"window":{"navigationBarTitleText":"Sign in","navigationBarTextStyle":"white","titleNView":{"autoBackButton":false}}},{"path":"/pages/Sign_up/Sign_up","meta":{},"window":{"navigationBarTitleText":"Sign up","navigationBarTextStyle":"white"}},{"path":"/pages/Home/Home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"Projects","enablePullDownRefresh":false,"titleNView":{"buttons":[{"text":"+","fontSize":"20px","fontWeight":"bold"}]}}},{"path":"/pages/Sign_up/Borrower_Sign_up","meta":{},"window":{"navigationBarTitleText":"Borrower Sign Up","enablePullDownRefresh":false}},{"path":"/pages/Sign_up/Sign_Up_Successful","meta":{},"window":{"navigationBarTitleText":"Successful","enablePullDownRefresh":false}},{"path":"/pages/Sign_up/Builder_Sign_up_0","meta":{},"window":{"navigationBarTitleText":"Builder Sign Up - Step 1/3","enablePullDownRefresh":false}},{"path":"/pages/Sign_up/Builder_Sign_up_1","meta":{},"window":{"navigationBarTitleText":"Builder Sign Up - Step 2/3","enablePullDownRefresh":false}},{"path":"/pages/Sign_up/Builder_Sign_up_2","meta":{},"window":{"navigationBarTitleText":"Builder Sign Up - Step 3/3","enablePullDownRefresh":false}},{"path":"/pages/Sign_up/Training_Org_Sign_Up","meta":{},"window":{"navigationBarTitleText":"Training Organization Sign Up","enablePullDownRefresh":false}},{"path":"/pages/Home/My","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"My","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
