//Falls die URL einen bestimmten Titel verlangt.
//in -app.js: title={specialTitle[appProps.router.pathname] ? specialTitle[appProps.router.pathname] : titelCreater(router.pathname)}
export const specialTitle = {
     "/faq": "Häufige Fragen FAQ ",
  }

//Kreiert einen Titel aus der URL fuer den SEO Head
export const titelCreater = (url) => {
    let newTitel = url.substring(1)
    newTitel = newTitel.charAt(0).toUpperCase() + newTitel.slice(1);
    return newTitel;
  }
//export default specialTitle;
