import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectInfoForm.css";




const ProjectInfoForm = () => {
    
    const[organization, setOrganization] = useState("");
    const[projectName, setProjectName] = useState("");
    const[projectManager, setProjectManager] = useState("");
    const[riskManager, setRiskManager] = useState("");
    const[projectDescription, setProjectDescription] = useState("");
    const[,setProjectFile] = useState(null);


    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate("/project-settings");
    };

    const handleFileUpload = (e) => {
        const selectedFile = e.target.files[0];
        setProjectFile(selectedFile);
      };

    const handleClearFile = () => {
        setProjectFile(null);
        const fileInput = document.getElementById("fileInput"); // Make sure to add id="fileInput" to your input element
        if (fileInput) {
            fileInput.value = "";
  }
    };
    
    return (
        <div className="projectinfoform">
            <h2>Project Information</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Organization:</label>
                <select
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}

                >
                    <option value="ARC-R">ARC-R</option>
                    <option value="ARC-AA">ARC-AA</option>
<option value="ARC-AF">ARC-AF</option>
<option value="ARC-AFH">ARC-AFH</option>
<option value="ARC-AFO">ARC-AFO</option>
<option value="ARC-AFS">ARC-AFS</option>
<option value="ARC-AFT">ARC-AFT</option>
<option value="ARC-AM">ARC-AM</option>
<option value="ARC-AO">ARC-AO</option>
<option value="ARC-AOI">ARC-AOI</option>
<option value="ARC-AOO">ARC-AOO</option>
<option value="ARC-AOX">ARC-AOX</option>
<option value="ARC-AT">ARC-AT</option>
<option value="ARC-AV">ARC-AV</option>
<option value="ARC-C">ARC-C</option>
<option value="ARC-CE">ARC-CE</option>
<option value="ARC-CF">ARC-CF</option>
<option value="ARC-CFB">ARC-CFB</option>
<option value="ARC-CFR">ARC-CFR</option>
<option value="ARC-CP">ARC-CP</option>
<option value="ARC-CPM">ARC-CPM</option>
<option value="ARC-CPP">ARC-CPP</option>
<option value="ARC-CR">ARC-CR</option>
<option value="ARC-CRI">ARC-CRI</option>
<option value="ARC-CRM">ARC-CRM</option>
<option value="ARC-CS">ARC-CS</option>
<option value="ARC-D">ARC-D</option>
<option value="ARC-DE">ARC-DE</option>
<option value="ARC-DI">ARC-DI</option>
<option value="ARC-DIB">ARC-DIB</option>
<option value="ARC-DL">ARC-DL</option>
<option value="ARC-DO">ARC-DO</option>
<option value="ARC-DT">ARC-DT</option>
<option value="ARC-H">ARC-H</option>
<option value="ARC-HR">ARC-HR</option>
<option value="ARC-HRD">ARC-HRD</option>
<option value="ARC-HRM">ARC-HRM</option>
<option value="ARC-I">ARC-I</option>
<option value="ARC-ID">ARC-ID</option>
<option value="ARC-IO">ARC-IO</option>
<option value="ARC-IQ">ARC-IQ</option>
<option value="ARC-IS">ARC-IS</option>
<option value="ARC-J">ARC-J</option>
<option value="ARC-JA">ARC-JA</option>
<option value="ARC-JAB">ARC-JAB</option>
<option value="ARC-JAC">ARC-JAC</option>
<option value="ARC-JAI">ARC-JAI</option>
<option value="ARC-JAZ">ARC-JAZ</option>
<option value="ARC-JC">ARC-JC</option>
<option value="ARC-JCE">ARC-JCE</option>
<option value="ARC-JCM">ARC-JCM</option>
<option value="ARC-JO">ARC-JO</option>
<option value="ARC-JP">ARC-JP</option>
<option value="ARC-JQ">ARC-JQ</option>
<option value="ARC-JS">ARC-JS</option>
<option value="ARC-P">ARC-P</option>
<option value="ARC-PX">ARC-PX</option>
<option value="ARC-Q">ARC-Q</option>
<option value="ARC-QH">ARC-QH</option>
<option value="ARC-QS">ARC-QS</option>
<option value="ARC-R">ARC-R</option>
<option value="ARC-RD">ARC-RD</option>
<option value="ARC-RE">ARC-RE</option>
<option value="ARC-RM">ARC-RM</option>
<option value="ARC-RO">ARC-RO</option>
<option value="ARC-S">ARC-S</option>
<option value="ARC-SC">ARC-SC</option>
<option value="ARC-SCB">ARC-SCB</option>
<option value="ARC-SCF">ARC-SCF</option>
<option value="ARC-SCR">ARC-SCR</option>
<option value="ARC-SG">ARC-SG</option>
<option value="ARC-SGA">ARC-SGA</option>
<option value="ARC-SGE">ARC-SGE</option>
<option value="ARC-SGG">ARC-SGG</option>
<option value="ARC-SS">ARC-SS</option>
<option value="ARC-SSA">ARC-SSA</option>
<option value="ARC-SST">ARC-SST</option>
<option value="ARC-SSX">ARC-SSX</option>
<option value="ARC-T">ARC-T</option>
<option value="ARC-TH">ARC-TH</option>
<option value="ARC-TI">ARC-TI</option>
<option value="ARC-TN">ARC-TN</option>
<option value="ARC-TNA">ARC-TNA</option>
<option value="ARC-TNC">ARC-TNC</option>
<option value="ARC-TNP">ARC-TNP</option>
<option value="ARC-TS">ARC-TS</option>
<option value="ARC-TSA">ARC-TSA</option>
<option value="ARC-TSF">ARC-TSF</option>
<option value="ARC-TSM">ARC-TSM</option>
<option value="ARC-TSS">ARC-TSS</option>
<option value="ARC-U">ARC-U</option>
<option value="ARC-W">ARC-W</option>
<option value="ARC-XC">ARC-XC</option>
<option value="ARC-XT">ARC-XT</option>
<option value="ARC-Y">ARC-Y</option>
<option value="ARC-YA">ARC-YA</option>
<option value="ARC-YAH">ARC-YAH</option>
<option value="ARC-YF">ARC-YF</option>
<option value="ARC-YH">ARC-YH</option>
<option value="ARC-YN">ARC-YN</option>
<option value="ARC-YS">ARC-YS</option>
<option value="ARC-YX">ARC-YX</option>
<option value="ARC-YZ">ARC-YZ</option>


                </select>
                <label>Project Name:</label>
                <input
                    type="text"
                    required
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)} 

                 />
                <label>Project Manager:</label>
                <input
                    type="text"
                    required
                    value={projectManager}
                    onChange={(e) => setProjectManager(e.target.value)} 

                 />
                <label>Risk Manager:</label>
                <input
                    type="text"
                    required
                    value={riskManager}
                    onChange={(e) => setRiskManager(e.target.value)} 

                 />
                <label>Project Description:</label>
                <textarea
                    required
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)} 

                ></textarea>

            
            <label>Add Project File:</label>
            <input
                type="file"
                accept=".pdf, .doc, .docx, .txt"
                onChange={handleFileUpload}
                id="fileInput"
            />
   
            <div className="btn-group-1">
                <button>Add Logo</button>

            </div>
                
               
            <div className="btn-group-2">
                <button onClick={handleClearFile}>Clear File</button>
                <button>Clear Logo</button>


            </div>
                
                
            <div className="btn-group-3">
                <button>Ok</button>
                <button>Cancel</button>



            </div>
                




                    
            </form>



        </div>
      
    );
}

export default ProjectInfoForm;