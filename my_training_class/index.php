<?php
/**
 * Created by PhpStorm.
 * User: zhangsanfeng
 * Date: 2019/9/5
 * Time: 13:02
 */

//echo('s.vdouw.com');
//
//echo('<br/>');

echo(eval('?>(2+3)<?php '));

$arr = eval('?>' . ('3+2-4') . '<?php ');
echo $arr;

/*******************四则运算计算器********************/
function maths($exp)
{
    $arr_exp = [];
    for ($i = 0; $i < strlen($exp); $i++) {
        if ($exp[$i] == '+' || $exp[$i] == '-' || $exp[$i] == '*' || $exp[$i] == '/' || $exp[$i] == '(' || $exp[$i] == ')') {
            $arr_exp[] = $exp[$i];
        } else {
            if (end($arr_exp) == '+' || end($arr_exp) == '-' || end($arr_exp) == '*' || end($arr_exp) == '/' || end($arr_exp) == '(' || end($arr_exp) == ')' || end($arr_exp) == '') {
                $arr_exp[] = $exp[$i];
            } else {
                $arr_exp[key($arr_exp)] = end($arr_exp) . $exp[$i];
            }
        }
    }
    $result = calculator(array_reverse($arr_exp));
    return $result;
}

function calculator($exp)
{
    $arr_n = [];
    $arr_op = [];
    while (($s = array_pop($exp)) != '') {
        if ($s == '(') {
            $temp = [];
            $quote = 1;
            $endquote = 0;
            while (($t = array_pop($exp)) != '') {
                if ($t == '(') {
                    $quote++;
                }
                if ($t == ')') {
                    $endquote++;
                    if ($quote == $endquote) {
                        break;
                    }
                }
                array_push($temp, $t);
            }
            $temp = array_reverse($temp);
            array_push($arr_n, calculator($temp));
        } else if ($s == '*' || $s == '/') {
            $n2 = array_pop($exp);
            if ($n2 == '(') {
                $temp = array();
                $quote = 1;
                $endquote = 0;
                while (($t = array_pop($exp)) != '') {
                    if ($t == '(') {
                        $quote++;
                    }
                    if ($t == ')') {
                        $endquote++;
                        if ($quote == $endquote)
                            break;
                    }
                    array_push($temp, $t);
                }
                $temp = array_reverse($temp);
                $n2 = calculator($temp);
            }
            $op = $s;
            $n1 = array_pop($arr_n);
            switch ($op) {
                case '+':
                    $result = $n1 + $n2;
                    break;
                case '-':
                    $result = $n1 - $n2;
                    break;
                case '*':
                    $result = $n1 * $n2;
                    break;
                case '/':
                    $result = $n1 / $n2;
                    break;
            }
            array_push($arr_n, $result);
        } else if ($s == '+' || $s == '-') {
            array_push($arr_op, $s);
        } else {
            array_push($arr_n, $s);
        }
    }
    $n2 = array_pop($arr_n);
    while (($op = array_pop($arr_op)) != '') {
        $n1 = array_pop($arr_n);
        switch ($op) {
            case '+':
                $n2 = $n1 + $n2;
                break;
            case '-':
                $n2 = $n1 - $n2;
                break;
            case '*':
                $n2 = $n1 * $n2;
                break;
            case '/':
                $n2 = $n1 / $n2;
                break;
        }
    }
    return $n2;
}

$a = '1.1*2+3';
echo maths($a);

?>