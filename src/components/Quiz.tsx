import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/articleData';
import { CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

export const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleReset = () => {
    setUserAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const allAnswered = QUIZ_QUESTIONS.every((q) => userAnswers[q.id] !== undefined);

  return (
    <div className="my-12 border border-stone-200 bg-white rounded-xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
            Auto-Évaluation Technique
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-editorial text-stone-900">
            Testez vos connaissances sur le Cloud Decathlon
          </h3>
          <p className="text-sm text-stone-600 mt-1">
            3 questions pour valider les concepts d'architecture multi-cloud, edge computing et FinOps.
          </p>
        </div>

        {submitted && (
          <div className="flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-lg border border-stone-200 self-start sm:self-auto">
            <Award className="w-5 h-5 text-[#001090]" />
            <span className="text-sm font-bold text-stone-900 font-mono">
              Score : {score} / {QUIZ_QUESTIONS.length}
            </span>
          </div>
        )}
      </div>

      <div className="divide-y divide-stone-200/80">
        {QUIZ_QUESTIONS.map((q, qIndex) => {
          const selectedOption = userAnswers[q.id];
          const isCorrect = selectedOption === q.correctIndex;

          return (
            <div key={q.id} className="py-6 first:pt-6 last:pb-0">
              <div className="font-semibold text-stone-900 mb-3 text-sm sm:text-base">
                <span className="text-[#001090] font-mono mr-2">0{qIndex + 1}.</span>
                {q.question}
              </div>

              <div className="space-y-2 mb-3">
                {q.options.map((opt, oIndex) => {
                  let buttonStyle = 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100';

                  if (selectedOption === oIndex) {
                    buttonStyle = 'bg-stone-100 border-[#001090] text-stone-900 font-medium';
                  }

                  if (submitted) {
                    if (oIndex === q.correctIndex) {
                      buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-medium';
                    } else if (selectedOption === oIndex && !isCorrect) {
                      buttonStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                    } else {
                      buttonStyle = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleSelect(q.id, oIndex)}
                      disabled={submitted}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 ${buttonStyle}`}
                    >
                      <div className="w-4 h-4 rounded-full border border-stone-400 flex items-center justify-center shrink-0 mt-0.5">
                        {selectedOption === oIndex && (
                          <div className="w-2 h-2 rounded-full bg-[#001090]" />
                        )}
                      </div>
                      <span className="flex-1">{opt}</span>
                      {submitted && oIndex === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {submitted && selectedOption === oIndex && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className={`p-3 rounded-lg text-xs leading-relaxed ${isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-stone-100 text-stone-700 border border-stone-200'}`}>
                  <span className="font-semibold">{isCorrect ? 'Correct ! ' : 'Explication : '}</span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-stone-200 flex items-center justify-between">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className="px-5 py-2.5 bg-[#001090] text-white text-xs font-semibold rounded-lg hover:bg-[#000d70] disabled:opacity-40 disabled:hover:bg-[#001090] transition-colors"
          >
            Vérifier mes réponses
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Recommencer le test</span>
          </button>
        )}

        <div className="text-xs text-stone-500 font-mono">
          {Object.keys(userAnswers).length} / {QUIZ_QUESTIONS.length} répondues
        </div>
      </div>
    </div>
  );
};
