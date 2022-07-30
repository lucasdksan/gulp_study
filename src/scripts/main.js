window.onload = function(){
    function addResult(v1, v2){
        return v1 + v2;
    }

    function printResult(result){
        document.querySelector('.area--result').innerHTML = result;
    }

    document.getElementById('result').addEventListener('click', function (){
        let n1 = parseFloat(document.querySelector('#first').value);
        let n2 = parseFloat(document.querySelector('#second').value);

        let result = addResult(n1, n2);

        printResult(result);
    });
}