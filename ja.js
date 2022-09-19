//Globales
let tablero
let contador=0;


function crear(numr,numc)
{
    numr=3;
    numc=3;
    let rows=[];
    for(let i=0;i<numr;i++)
    {
        let casilla=[];
        for(let j=0;j<numc;j++)
        {
            casilla.push(
                {
                    show:false,
                    value:0
                }
            );            
                
        }
        rows.push(casilla);
    }
    return rows;
    
}
function printboard(tablero)
{
    for(let row of tablero)
    {
        let rowstr="";
        for(let casilla of row)
        {
            rowstr=rowstr+ casilla+ " ";
        }
        console.log(rowstr);
    }
}
function setValue(tablero,row,col,value)
{
    tablero[row][col]=value;
}
function getvalue(row,col,tablero)
{
    return tablero[row][col];
}

const renderizacion=(tablero)=>
{
    for(let i=0;i<tablero.length;i++)
    {
        const casillas=tablero[i];
        for(let j=0;j<casillas.length ;j++)
        {
            
            //Captura
            const butcasillas=document.getElementById(`${i}_${j}`);
            console.log(butcasillas);
            //Modificacion
            if(casillas[j].show){
                butcasillas.innerHTML=casillas[j].value;
            }
            else
            {
                butcasillas.innerHTML=" ";
            }
        }
    }

}
const ganador=(tablero)=>
{
    let acum=0;
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            const casillauno=document.getElementById(`${i}_${j}`);
            if(casillauno.innerText=="X")
            {
                //console.log("hola");
                const c1=document.getElementById(`${i}_${j+1}`);
                const c2=document.getElementById(`${i}_${j-1}`);
                const c3=document.getElementById(`${i+1}_${j+1}`);
                const c4=document.getElementById(`${i+1}_${j-1}`);
                const c5=document.getElementById(`${i-1}_${j+1}`);
                const c6=document.getElementById(`${i-1}_${j-1}`);
                const c7=document.getElementById(`${i+1}_${j}`);
                const c8=document.getElementById(`${i-1}_${j}`);
                if(c1.innerText=="X" || c2.innerText=="X" || c3.innerText=="X" || c4.innerText=="X" || c5.innerText=="X" || c6.innerText=="X" || c7.innerText=="X" || c8.innerText=="X")
                {
                    acum++;
                    console.log("Hola");
                    if(c4=="X")
                    {
                        const c44=document.getElementById(`${i}_${j+2}`)
                        if(c44.innerText=="X")
                        {
                            console.log("Se acabo");
                        }
                    }


                    break;
                }


            }
            break;
        }
        break;
    }
}

const casclick=(row,col)=>
{
    //let cas=getvalue(row,col,tablero);
    if(contador==0)
    {
        
        const casilla=document.getElementById(`${row}_${col}`);
        casilla.innerHTML="X";
        contador++;
        ganador(tablero);
    }else
    {
        const casilla=document.getElementById(`${row}_${col}`);
        casilla.innerHTML="O";
        contador--;
        ganador(tablero);
    }
   //cas.show=true;
   //console.log(cas.value);
}
function main()
{
    tablero=crear(2,2);
    renderizacion(tablero);
    //setValue(tablero,2,2,0);
    //console.log(tablero);
    //console.log(getvalue(2,2,tablero));


    //printtablero(tablero);
}
main()

//console.log(tablero);
