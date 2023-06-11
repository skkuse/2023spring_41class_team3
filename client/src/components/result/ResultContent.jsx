import React from 'react';
import { useSelector } from 'react-redux';
import ResultImproved from './ResultImproved';
import ResultReadability from './ResultReadability';
import ResultTimeComplex from './ResultTimeComplex';
import ResultAnalysis from './ResultAnalysis';
import ResultFeedback from './ResultFeedback';

function ResultContent() {
	const { focusType } = useSelector((state) => state.contestResult);

	switch (focusType) {
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
