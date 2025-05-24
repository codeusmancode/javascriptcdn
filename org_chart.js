function org_chart(mydata){
         
            arr = [];
            
            var expand = false;
            google.charts.load("current", {packages:["orgchart"]});
			google.charts.setOnLoadCallback(draw);

            function draw(){
                console.log("drawing");
                link = "";
                var data = new google.visualization.DataTable();
                data.addColumn("string", "parent_id");
                data.addColumn("string", "child_id");

                for (var i = 0 ; i < mydata.length; i++){
                    r = mydata[i];
                    console.log("parent",r.parent.toString());
                    if (r.type == "BOX"){
                       link = "<a class=box data-id="+r.id+"href=#> Usman</a>";
                    }else{
                        link = "";
                    }

                    arr.push([
                        {
                            "v":r.child,
                            "f":"<div class=mynode><div style=font-size:.9rem;font-weight:900;color:#1D4A6D;height:3rem;align-content:center;color:"+r.clr+">"+r.child_name+"</div>"+link+"</div>"
                        },
                        r.parent.toString()
                    ]);

                }// end loop
                arr[0][1]=" ";
                console.log(arr);
                data.addRows(arr);
                
                chart = new google.visualization.OrgChart(document.getElementById("chart_div"));

                chart.draw(data, {"allowHtml":true,"allowCollapse":true});
            }// end draw function

}
