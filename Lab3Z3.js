function iscrtajTabeluMnozenja() {
    document.write("<table>");
    document.write("<tr>");
    document.write("<th>X</th>");
    for (let j = 1; j <= 10; j++) {
        document.write("<th>" + j + "</th>");
    }
    document.write("</tr>");
    for (let i = 1; i <= 10; i++) {
        document.write("<tr>");
        document.write("<th>" + i + "</th>");
        for (let j = 1; j <= 10; j++) {
            document.write("<td>" + (i * j) + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

iscrtajTabeluMnozenja();