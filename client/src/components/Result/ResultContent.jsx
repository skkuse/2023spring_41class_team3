import React from 'react';
import { useSelector } from 'react-redux';
import ResultImproved from './ResultImproved';
import ResultReadability from './ResultReadability';
import ResultTimeComplex from './ResultTimeComplex';
import ResultAnalysis from './ResultAnalysis';
import ResultFeedback from './ResultFeedback';

function ResultContent() {
	const { resultType } = useSelector((state) => state.resultType);

	if (resultType === 'readability') {
		return <ResultReadability />;
	}
	if (resultType === 'timeComplexity') {
		return <ResultTimeComplex />;
	}
	if (resultType === 'improvement') {
		return <ResultImproved />;
	}
	if (resultType === 'analysis') {
		return <ResultAnalysis />;
	}
	if (resultType === 'feedback') {
		return <ResultFeedback />;
	}

	return <div> 나머지 </div>;
}

export default ResultContent;
