//状态
var STATE = {
    Sblanck: 'Sblanck',//起始的空格
    Sign: 'Sign',//符号位
    Integer: 'Integer',//整数部分
    PointInteger: 'PointInteger',//小数点（左有整数）
    PointOnly: 'PointOnly',//小数点（左无整数）
    Decimal: 'Decimal',//小数部分
    E: 'E',//字符e或E
    ESign: 'ESign',//指数符号
    EInteger: 'EInteger',//指数数字
    Eblank: 'Eblank'//末尾空格
}
// 转义字符串
var STR = {
    number:'number',//数字
    point: 'point',//小数点
    spack:'spack',//空格
    e: 'e',//字符e
    sign: 'sign'//+-号
}
// 转移规则
var TRRULE = {
    Sblanck:{
        number: 'Integer',
        point: 'PointOnly',
        spack: 'Sblanck',
        sign: 'Sign'
    },
    Sign:{
        number: 'Integer',
        point:'PointOnly'
    },
    Integer:{
        number:'Integer',
        point:'PointInteger',
        e:'E',
        spack:'Eblank'
    },
    PointInteger:{
        number:'Decimal',
        spack:'Eblank',
        e:'E'
    },
    PointOnly:{
        number:'Decimal',
    },
    Decimal:{
        number:'Decimal',
        spack:'Eblank',
        e:'E'
    },
    E:{
        number:'EInteger',
        sign: 'ESign'
    },
    ESign:{
        number:'EInteger',
    },
    EInteger:{
        number:'EInteger',
        spack:'Eblank'
    },
    Eblank:{
        spack:'Eblank'
    }
}

function strJudge(str){
    if(str<='9'&&str>='0') return 'number';
    if(str==='.') return 'point';
    if(str===' ') return 'spack'
    if(str==='e'||str==='E') return 'e';
    if(str==='+'||str==='-') return 'sign';
    return null;
}


var isNumber = function(s) {
    let state = STATE.Sblanck, str;
    for(let i=0;i<s.length;i++){
        str = strJudge(s[i]);
        if(str===null) return false;
        state = TRRULE[state][str];
        if(state===undefined) return false;
    }
    if(state===STATE.Integer||state===STATE.PointInteger||state===STATE.Decimal||state===STATE.EInteger||state===STATE.Eblank) return true;
    return false;
};