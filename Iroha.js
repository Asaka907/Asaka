//いらっしゃいませ～（ ＾ω＾）
if (document.cookie === "access"){
    alert("二回も見に来てくれたんですね！ありがとうございます！");
  } else {
    alert("いらっしゃいませ！")
  }

  document.cookie = "access";
