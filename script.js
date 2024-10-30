//https://learn-us-east-1-prod-fleet02-xythos.content.blackboardcdn.com/5f9c84db7d38a/29555720?X-Blackboard-S3-Bucket=learn-us-east-1-prod-fleet01-xythos&X-Blackboard-Expiration=1730235600000&X-Blackboard-Signature=3HZxfsaj1Ltx7Qg1a8mHzEL0JxsS5Zu4iZTGEklIbHY%3D&X-Blackboard-Client-Id=301799&X-Blackboard-S3-Region=us-east-1&response-cache-control=private%2C%20max-age%3D21600&response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%27HW3_NEW%25281%2529.pdf&response-content-type=application%2Fpdf&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAp75weIU1symbmk3LD72jebGfOp%2FTFtkte5OvuIUI5QAiADBzaczIrXfPiw0ds5CVUolBaz9jolXR0RXaP97o%2FOKCq0BQhgEAQaDDYzNTU2NzkyNDE4MyIMjiAouijF%2FuIp9lnPKpEFsyWDpCgpVAh2f4kB1Pt19uRfry%2F3wWadFqenApcwzumRMtUgc49WK5%2FCZ7YIY%2BMjKlGsVOrfsCW6%2FLNfL3jqZKtLSlJOwXeqWOBf2MtLzzNAFLZRz0cN1Y8E0F0%2Bt39jaIejXcyGoUh6UNSnrnO90D9hIV1NC4R9HjWy8U32WiNzLrgVOQHVSdD8bhk4Ddpr1I8iwyAt7jCDTg6oNjw4NJbaTC9eIWWpZJmGKswtLNdIVoxLNuM0P0V8G%2FrF8jvcE8tW7gcSiWfzz%2FZi6KuCMt%2F0vxsKu4cyUVxD1CNnMXzPgEurabTEsjNUTXE3W1SKAgUE2mTtoXbYbMmuu%2BLw2882ItEV4RTeXoNu%2BC9i8DGMSysYIbM9KM0%2BeKVR7hwI%2Bhe9bdFkp0nXHqtfnhjpV4Id2I1dNNNtAU3HOlaZLjR4%2B8mhqSKdvjtUqJJQf2gt92kaD6eCAXRY8o%2FZrozJq321Lpm1ugbdLZWwWcWFNQ%2FTFXi6T37GWSylT%2FhxGjmuSenB5fQuVUQFpewkmuu2V2QFkQd%2FCSaQBUsen07AK5R8%2FjfmahLrVZlBWah%2B4Da3aOc5CjwU0w8BDmh3dHDUdj8JlGGMo60sZRrW3%2FSCuOKcC%2F5yP0njBsw48rtxQsLxOxJBhR%2BR9CEgevrREXHaBbAkKlozhlQcSyGuyD9BXnh%2B8MbCZnlIvN2PU1yLApZ%2BbtRI9AlDfYo8zLohSMBMq3KIiAeohIJFl0cbbGepVWK2Y6ghJYwhAPacBokaxpic3frHcBPZdSYFSJrj0%2Beh%2Bn0KteKcW%2BWKJhJFpclFpwG7G0%2F7uBLJvHOxrCJnzIkldJNJt9JBdofynOyc7ZwHDhLCtPRZnIWirQhqY%2FStr%2BbeMMz1g7kGOrIBzl0Zo94KARIZs%2F7RMvKF5mS5Mzi4A3WYvska3eQFy7TwqUm0gTLPlfZgNahXVf%2FQmX1uXnBE18L6CiwOXMTUPh3sGBstgqiPK911V2%2FeXx3RT%2BM1JQo%2B9SivvBNLbqc9NOZKJ%2BFHPNMEB5y50UYIggLZLymXl%2FdCh2u7dIfg6V4vDY6DiwFR2LaAeTYLFWpQwf2UYGv%2Bhwru6d%2Br9Z2AiiggDOSoQk1Ajam0iNSZNw22yg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241029T150000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Credential=ASIAZH6WM4PLSNBGD7ER%2F20241029%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9c9f635ab09eb974fb1f0f06395881616d95e0ce78df3f87bca528b6260b4a10
errormsg = ""
textboxes = [null,null,null,null];
values = [0,0,0,0]
sizeX = 0
sizeY = 0

//"Enums" 
const x0 = 0
const x1 = 1
const y0 = 2
const y1 = 3


window.onload = function(){
	textboxes[0] = document.getElementById('b1')
	textboxes[1] = document.getElementById('b2')
	textboxes[2] = document.getElementById('b3')
	textboxes[3] = document.getElementById('b4')

	textboxes[x0].value = -50
	textboxes[x1].value = 50
	textboxes[y0].value = -50
	textboxes[y1].value = 50

	sizeX = values[x1] - values[x0]
	sizeY = values[y1] - values[y0]

	errormsg = document.getElementById('errormsg')
	errormsg.textContent = "";
}

//Update values
function GetValues(){
	values[0] = parseFloat(textboxes[0].value)
	values[1] = parseFloat(textboxes[1].value)
	values[2] = parseFloat(textboxes[2].value)
	values[3] = parseFloat(textboxes[3].value)

	//Get Size
	sizeX = values[x1] - values[x0] + 1
	sizeY = values[y1] - values[y0] + 1
}

//Debug
function PrintValues(){
	for ( let i = 0; i < 4; i++ )
		console.log(values[i])
}

function CreateTile(row,text){
    const cell = document.createElement("td");
	const cellText = document.createTextNode(text);
    cell.appendChild(cellText);
    row.appendChild(cell);
}

function Submit(){
	GetValues()

	//If table exists remove it
	existingTable = document.getElementById("thetable")
	if ( existingTable != null ){
		existingTable.remove()
		console.log("removed table")
	}

	if ( sizeX <= 1 || sizeY <= 1 ){
		console.log("Axis sizes must be greater than 0")
		errormsg.textContent = "Axis sizes must be greater than 0"
		return;
	}

	if ( sizeX * sizeY > 100000){
		errormsg.textContent = "Matrix Size too large"
		return;
	}

	//Cant have an error if it gets this far
	errormsg.textContent = ""
	  
	const tbl = document.createElement("table");
	const tblBody = document.createElement("tbody");
	
	//Create table header
	const hrow = document.createElement("tr");
	CreateTile(hrow,"*")
	for ( let i = 0; i < sizeX; i ++ )
		CreateTile(hrow,`${i + values[x0]}`)
	tblBody.appendChild(hrow);

	//Create Rows
	for ( let y = 0; y < sizeY; y++ ){
		row = document.createElement("tr");
		CreateTile(row,`${values[x0] + y}`)

		let yval = values[y0] + y
		for ( let x = 0; x < sizeX; x++){
			let xval = values[x0] + x

			CreateTile(row,`${xval * yval}`)		
		}

		tblBody.appendChild(row)
	}

	//Add to document
	  tbl.appendChild(tblBody);
	  tbl.id = "thetable"
	  document.body.appendChild(tbl);
	  tbl.setAttribute("border", "2");
}