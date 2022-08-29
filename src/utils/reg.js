/* 
    验证规则
*/

// 账号验证 (可以是中文、英文、数字，长度在2~15)
export const ACC_REG = /^[\u4E00-\u9FA5A-Za-z0-9]{2,15}$/

// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
export const PWD_REG = /^[a-zA-Z]\w{5,17}$/