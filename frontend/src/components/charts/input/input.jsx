import * as XLSX from 'xlsx';

const fileInput = document.getElementById("file");
fileInput.addEventListener('change' , (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert sheet to JSON
        console.log(jsonData);
      };

      reader.readAsArrayBuffer(file);
});

const InputForm = () =>{
    return(
      <div>
      <form action="/charts" method="post">
        <label htmlFor="file">Upload File : </label>
        <input type="file" id="file"/>
        <label htmlFor="x-axis">Chart Type : </label>
        <select name="chart" id="chart">
            <option value="bar">Bar</option>
            <option value="line">line</option>
            <option value="dot">Dot</option>
            <option value="3d">3D Chart</option>
        </select>
        <label htmlFor="x-axis">x-axis : </label>
        <input type="text" placeholder="x-axis" id="x-axis"/>
        <label htmlFor="y-axis">y-axis : </label>
        <input type="text" placeholder="y-axis" id="y-axis"/>
      </form>
      </div>
    );
}

export default InputForm ;