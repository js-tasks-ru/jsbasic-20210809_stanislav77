function showSalary(users, age) {
    let resultStr = "";
    let resultArr = users.filter(item => item.age <= age);
    for (let i = 0; i < resultArr.length; i++)
    {
        resultArr[i].strNameAndBalance= resultArr[i].name + ", " + resultArr[i].balance + "\n";
        resultStr += resultArr[i].strNameAndBalance;
    };
    return resultStr.substr(0, resultStr.length-1);
}
