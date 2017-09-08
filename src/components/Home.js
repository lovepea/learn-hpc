import React from 'react';


const Home = () => {

  const desc = [
    {
      item: "高性能计算（High Performance Computing，HPC）",
      description: "指利用大量处理单元的聚合运算来解决复杂的问题，现已成为继理论科学和实验科学之后的科学探索第三范式，被广泛应用与各行各业。在这里，您可以找到所需要的高性能计算学习资源！",
    },
    {
      item: "丰富的学习方案：",
      description: "我们围绕高性能计算，整合高性能计算领域内各方向学习资源(如OpenMP, MPI等等)，并提供多种学习方案。您可以根据个人情况选择相应的学习方案进行自学。",
    },
    {
      item: "在线个性化测验：",
      description: "指利用大量处理单元的聚合运算来解决复杂的问题，"
      + "现已成为继理论科学和实验科学之后的科学探索第三范式，被广泛应用与各行各业。在这里，您可以找到所需要的高性能计算学习资源"
    },
    {
      item: "在线HPC实验工具",
      description: "为了让您能够专注于实验本身而不是繁琐的环境配置，我们提供了在线HPC实验工具。在这里，您可以找到大量实验内容，并在线提交实验代码！"
    }
  ]

  var descs = [];

  const pStyle = {
    fontWeight: 'bold',
  }

  for (var i = 0; i < desc.length; i++) {
      descs.push(
        <p className="" style={ pStyle }>{ desc[i].item }<span>{ desc[i].description }</span>
        </p>
      )
  }

  return (
    <div className="jumbotron" style={{ backgroundColor: '#FFF'}}>
      <div className="container">
        <h1>
          Introduction
        </h1>
        { descs }
      </div>
    </div>
  )
}

export default Home;
