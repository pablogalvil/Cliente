let liga = [["Equipo 1", 19, ["G-3", "P-4", "E-5", "J-6"], ["A favor : 8", "En contra : 5"]],
 ["Equipo 2", 19, ["G-3", "P-4", "E-5", "J-6"], ["A favor : 8", "En contra : 5"]], 
 ["Equipo 3", 19, ["G-3", "P-4", "E-5", "J-6"], ["A favor : 8", "En contra : 5"]], 
 ["Equipo 4", 19, ["G-3", "P-4", "E-5", "J-6"], ["A favor : 8", "En contra : 5"]], 
 ["Equipo 5", 19, ["G-3", "P-4", "E-5", "J-6"], ["A favor : 8", "En contra : 5"]], 
 ["Equipo 6", 19, ["G-3", "P-4", "E-5", "J-6"], ["A favor : 8", "En contra : 5"]], 
 ["Equipo 7", 19, ["G-3", "P-4", "E-5", "J-6"], ["A favor : 8", "En contra : 5"]], 
 ["Equipo 8", 19, ["G-3", "P-4", "E-5", "J-6"], ["A favor : 8", "En contra : 5"]], 
 ["Equipo 9", 19, ["G-3", "P-4", "E-5", "J-6"], ["A favor : 8", "En contra : 5"]], 
 ["Equipo 10", 19, ["G-3", "P-4", "E-5", "J-6"], ["A favor : 8", "En contra : 5"]]];

 for (let i = 0; i < liga.length; i++) {
    for (let j = 0; j < liga[i].length; j++) {
        if(j == 2 || j == 3){
            for (let k = 0; k < liga[i][j].length; k++) {
                document.write(" | " + liga[i][j][k] + " ");
            }
        }else {
            document.write(liga[i][j] + " ");
        }
    }
    document.write("<br>");
 }