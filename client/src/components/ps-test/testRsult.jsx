function TestResult({ testResult }) {
	return testResult.run ? (
		<div>
			{testResult.caseResultList.map((testCase, index) => (
				// eslint-disable-next-line react/no-array-index-key
				<div key={index}>
					<p>
						Test {testCase.testIdx} success: {testCase.isSuccess ? 'True' : 'False'}{' '}
						time: {testCase.time}
					</p>
				</div>
			))}
		</div>
	) : (
		<div>
			<h2>Code Error</h2>
			<p>{testResult.message}</p>
		</div>
	);
}

export default TestResult;
