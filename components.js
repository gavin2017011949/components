$(function(){
 //excel表
 var container = document.getElementById('excel');
 var data=[
    ["Java", 1, "降", "-0.01%"],
    ["C", 2, "升", "+2.44%"],
    ["Python", 3, "升", "+1.41%"],
    ["C++", 4, "降", "-2.58%"],
    ["C#", 5, "升", "+2.07%"],
    ["Visual Basic .NET", 6, "降", "-1.17%"],
    ["JavaScript", 7, "降", "-0.85%"] 
  ]; 
 var options={
    data: data,
      className:'htCenter htMiddle',
      colWidths:'175px',
      rowHeights:40,
      colHeaders:[
        '语言名称',
        '排名',
        '升或降',
        '变化幅度'
      ],
      manualColumnResize: true,
      manualRowResize: true 
  }
new Handsontable(container,options);
//折线图
var myChart = echarts.init(document.getElementById('echarts'));
  var option = {
    title: {
      text: 'JavaScript语言排名变化'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { 
        type: 'line' 
      },
      extraCssText:'text-align: center;',  
      formatter: function (params) {
        return '排名</br>'+params[0].name+':'+params[0].data
        // console.log(params);
      }, 
    },
    legend: {
      data:['排名']
    },
    xAxis: {
      data: ["2000","2005","2010","2015","2020"]
    },
    yAxis: {},
    series: [{
      name: '排名',
      type: 'line',
      data: [6, 9, 8, 8, 7]
    }]
  };
  myChart.setOption(option);

});

