import React from 'react';
import { useSelector } from 'react-redux';
import ResultImproved from './ResultImproved';
import ResultReadability from './ResultReadability';
import ResultTimeComplex from './ResultTimeComplex';
import ResultAnalysis from './ResultAnalysis';
import ResultFeedback from './ResultFeedback';

function ResultContent() {
	const { resultType } = useSelector((state) => state.resultType);

	switch (resultType) {
		case 'readability':
			return <ResultReadability />;
		case 'timeComplexity':
			return <ResultTimeComplex />;
		case 'improvement':
			return <ResultImproved />;
		case 'analysis':
			return <ResultAnalysis />;
		case 'feedback':
			return <ResultFeedback />;
		default:
			return <ResultReadability />;
	}
}

export default ResultContent;
