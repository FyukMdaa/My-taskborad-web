<script>
  document.getElementById("showtoday").innerHTML = showtoday();
  function showtoday() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const showtoday = month + "月" + date + "日";
    return showtoday;
  }
</script>

