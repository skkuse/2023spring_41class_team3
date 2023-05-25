import React from 'react';
import styled from 'styled-components';

const CONTENT =
	'하노이 탑(Tower of Hanoi)은 퍼즐의 일종입니다. 하노이는 재귀를 사용하지 않는 경우의 알고리즘은 다음과 같다. 원반의 총 개수를 n이라 할 때 원반의 이동 회수는 위에서 언급한 대로 21 까지) x를 2진수로 표현하여 1이 들어가는 최저 자리수에 해당하는 원반을 왼쪽 또는 오른쪽으로 움직이면 된다. 3회차때는 11이므로 맨위의 1번 원반이, 16회차때는 1000의 4번 원반이 이동한다. 예를 들어 원반이 3개라면 1, 2, 3, 4, 5, 6, 7회차에 1번, 2번, 1번, 3번, 1번, 2번, 1번 이동하면 완성된다. 이 때 위에서부터 홀수번째의 원반이 왼쪽으로 이동(시프트, 더이상 왼쪽에 막대가 없다면 맨 오른쪽으로 이동)하면 짝수번째는 오른쪽으로 이동(마찬가지로 오른쪽 끝에서 오른쪽으로 가야 할 경우 왼쪽 끝으로 이동)하면 실수 없이 최소한으로만 움직일 수 있다. 이때 맨 위의 원반이 왼쪽과 오른쪽 가운데 어느 쪽으로 시프트하느냐에 따라 탑이 어느 막대로 움직이는가가 달라진다. 맨 위의 그림처럼 왼쪽 막대의 4개의 원반에 첫 원반이 오른쪽으로 간다면 마지막엔 오른쪽 막대에 정렬되며, 첫 원반이 왼쪽으로 가면 중앙 막대에 정렬된다. 퍼즐을 풀 때, 원반의 개수가 짝수라면 첫째 원반을 이동시킬 막대와는 다른 막대로 이동 시켜야한다. 홀수는 반대. 16회차때는 1000의 4번 원반이 이동한다.';

const Wrapper = styled.div`
	display: inline-block;
	background-size: cover;
	text-align: left;
	width: 100%;
	hieght: calc(100% - 140px);
	overflow: auto;
	background-size: cover;
`;

function ProblemContent() {
	return (
		<Wrapper>
			<h3>{CONTENT}</h3>
		</Wrapper>
	);
}

export default ProblemContent;
