<template>
  <footer>
    <div class="inside">
      <div class="footer">
        <div class="footer_h1"><p>SSTR</p></div>
        <div class="footer_soc_wrap flex flex_c flex_m">
          <div class="footer_soc">
            <a href=""><img src="@/assets/images/soc1.svg" alt=""></a>
          </div>
          <div class="footer_soc">
            <a href=""><img src="@/assets/images/soc2.svg" alt=""></a>
          </div>
          <div class="footer_soc">
            <a href=""><img src="@/assets/images/soc3.svg" alt=""></a>
          </div>
          <div class="footer_soc">
            <a href=""><img src="@/assets/images/soc4.svg" alt=""></a>
          </div>
          <div class="footer_soc">
            <a href=""><img src="@/assets/images/soc5.svg" alt=""></a>
          </div>
        </div>
      </div>
      <div class="copyright"><p>Copyright © 2020</p></div>
    </div>
  </footer>
</template>


<script>
	
</script>


<style lang="scss">
  footer{
    border-top: 1px solid rgba($color: #828282, $alpha: 0.3);
    padding-bottom: 83px;
  }
  .footer_h1{
    font-weight: 500;
    font-size: 26px;
    line-height: 24px;
    letter-spacing: 8px;
    color: #fff;
    margin-bottom: 11px;
  }
  .footer_soc{
    margin: 0 9px;
  }
  .footer{
    border-bottom: 1px solid rgba($color: #828282, $alpha: 0.45);
    margin-bottom: 28px;
  }
  .copyright{
    font-size: 15px;
    color: #828282;
  }
</style>