import { ItraningList, TexerciseList } from "@js/types/componentsTypes"
import { Chart } from "chart.js/auto"

export default(
    data: TexerciseList, 
    activeApproachsDoughnut: string[], 
    activeApproachsBar: string[], 
    trainingList: ItraningList | undefined
    )=>{

    if(!data){return}
    const chartDoughnut: any = document.getElementById('chartDoughnut')

    const DoughnutLabels: string[] = []; const DoughnutData: number[] = []
    data.forEach(el=>{
        if(!el.approachList){return}
        if(!activeApproachsDoughnut.includes(el.exerciseName)){return}
        let approachSum = 0
        el.approachList.forEach(approach=>approachSum += approach.weight * approach.repetitions)
        DoughnutLabels.push(el.exerciseName)
        DoughnutData.push(approachSum)
    })

    if(chartDoughnut == null){return}
    const chartDoughnutDestroyFn = new Chart(chartDoughnut, {
        type: 'doughnut',
        data: {
            labels: DoughnutLabels,
            datasets: [{
                label: 'Сумарный вес за упражнение',
                data: DoughnutData,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip:{
                    callbacks:{
                        label: (item)=> `${item.formattedValue} кг`
                    }
                }
            },
            responsive: true
        },
    })


    if(!trainingList){return}
    const BarLabels: string[] = []; const BarData: number[] = []
    trainingList.forEach(el=>{
        if(!activeApproachsBar.includes(el.name)){return}
        
        let sumTraining = 0
        el.exercisesList.forEach(exercises=>{
            exercises.approachList?.forEach(approach=>{
                sumTraining += approach.repetitions * approach.weight
            })
        })
        BarLabels.push(el.name)
        BarData.push(sumTraining)
    })

    const chartBar: any = document.getElementById('chartBar')
    if(chartBar == null){return}
    const chartBarDestroyFn = new Chart(chartBar, {
        type: 'bar',

        data: {
            labels: BarLabels,
            datasets: [{
                label: 'Сумарный вес за тренировку',
                data: BarData,
                backgroundColor: ["red", "blue", "green", "blue", "red", "blue"]
            }],
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip:{
                    callbacks:{
                        label: (item)=> `${item.formattedValue} кг`
                    }
                }
            },
            scales:{
                x: {
                    min: 0,
                    ticks:{
                        minRotation:90
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    })

    return {chartDoughnutDestroyFn, chartBarDestroyFn}
}