<template>
<div>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Сумма</th>
                    <th>%</th>
                    <th>Срок договора</th>
                    <th>Досрочное закрытие</th>
                    <th>Периодичность выплат</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Standart</td>
                    <td>15$</td>
                    <td>15</td>
                    <td>6 мес.</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Standart</td>
                    <td>15$</td>
                    <td>15</td>
                    <td>6 мес.</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>ИП</th>
                    <th>Дата Покупки</th>
                    <th>Покупатель</th>
                    <th>Сумма</th>
                    <th>Дата окончания</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="">Link</a></td>
                    <td>Standart</td>
                    <td>2020-06-05</td>
                    <td><a href="">Link</a></td>
                    <td>6 мес.</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td><a href="">Link</a></td>
                    <td>Standart</td>
                    <td>2020-06-05</td>
                    <td><a href="">Link</a></td>
                    <td>6 мес.</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>

    export default {

    };
</script>


<style lang="scss">
    .table{
        overflow: auto;
        margin-bottom: 50px;
        table{
            border: 1px solid rgba(198, 198, 198, 0.5);
            box-sizing: border-box;
            border-radius: 5px;
        }
        thead{
            th{
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 1.125px;
                text-transform: uppercase;
                color: #828282;
                box-sizing: border-box;
                padding: 19px 15px;
                vertical-align: middle;
            }
        }
        tbody{

            td{
                border-top: 1px solid #6E6E6E;
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 1.125px;
                text-transform: uppercase;
                color: #fff;
                box-sizing: border-box;
                padding: 19px 15px;
                vertical-align: middle;
                a{
                    color: #2A62CF;
                }
            }
        }
    }
    
</style>