//----------------------------------------------------------------------------
// This will responsify a table.smallCards inside a max-width: 39.9375em.
//----------------------------------------------------------------------------
var style;
var rule = "";
if ($("table.smallCards").length > 0) { 
  $("table.smallCards").each(function() {
    var myClass = $(this).data("small-cards-class");
    //-------------------------------------------------------------------
    // If data-small-cards-class isn't defined then we need to skip
    // this table
    //-------------------------------------------------------------------
    if (!myClass) {
      return true;
    }
    $(this).find("thead th").each(function(i) {  
      rule +=
        "." +
        myClass +
        " td:nth-of-type(" +
        (i + 1) +
        '):before { content: "' +
        $(this).text() +
        ':"; } ';
    });
  });
  style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    "@media " + " screen and (max-width: 39.9375em) " + " { " + rule + " }";
  $("head").append(style);
}