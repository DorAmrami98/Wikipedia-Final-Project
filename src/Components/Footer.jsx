import "./Footer.css";

  function Footer(props) {
    const { pageName } = props;
    function handleDownload(){
      let filePath;
      if(pageName === "general"){
        filePath = "/downloads/views_and_edits_charts_data.zip";
      }else if(pageName === "ac"){
        filePath = "/downloads/auto_correlation_charts.zip";
      }else if(pageName === "cc"){
        filePath = "/downloads/cross_correlation_charts.zip";
      }
      const link = document.createElement("a");
      link.href = filePath;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    
    return (
      <div className="footer">
        <span>By:</span>
        <span>Dor Amrami</span>
        <span>Boris Tichtman</span>
        <button className="btn btn-info btn-sm floating-button" onClick={handleDownload}><i className="fas fa-download"></i></button>
      </div>
    );
  }
  
export default Footer;