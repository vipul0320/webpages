let std = new Object();
std.id=101;
std.name="vipul";
std.hindi=95;
std.english=89;
std.maths=88;
std.sst=85;
std.chemistry=79;
std.showdetails=function(){
    document.write(`
    <tr>
        <td>${std.id}</td>
        <td>${std.name}</td>
        <td>${std.hindi}</td>
        <td>${std.english}</td>
        <td>${std.maths}</td>
        <td>${std.sst}</td>
        <td>${std.chemistry}</td>
        <td>${std.hindi + std.english + std.maths + std.sst + std.chemistry}</td>

    </tr>
`)
}
std.showdetails();

