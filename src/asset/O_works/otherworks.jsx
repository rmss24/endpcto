import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "./otherworks.css"
const steps= [
  {
    label: 'Analysis',
    description: `To describe an algorithm correctly, it is important to be clear about the objective to be achieved, that is, the results to be obtained.
    An algorithm must be .... FINISHED: an algorithm must be composed of a finite number of steps and must have a starting point and an end point, upon reaching which the execution of the operations is interrupted. front of the same input data must produce the same results (e.g. the instruction "multiply 2x5" always produces the same result, while the instruction "shoot an arrow at the target" can have different results even if it is aimed at the same archer equipped with its usual bow) .NOT AMBIGUOUS: the steps that make up the algorithm must be interpreted unambiguously by the performer, without leaving any doubts (eg "if the number is large enough then divide it by 3" ambiguous instruction!) REALIZABLE: it is necessary that there is an executor able to execute each step of the algorithm and in a finite time (eg "calculate all the decimal digits of π" will never end as these digits are infinite)`,
  },
  {
    label: 'flow-chart',
    description:
      'The representation of algorithms: the flow-chart In order to describe an algorithm it is not necessary to know a programming language; the sequence of the instructions can be represented with a semiformal language by means of block diagrams that allow the user to follow the flow of the execution of the instructions, for this reason these diagrams are called flow diagrams or flow-charts. they are formed by SYMBOLS of different shape, each with its own meaning, inside each symbol there is a short text. The LINES with ARROWS that join the various symbols indicate the flow of operations.',
  },
  {
    label: 'Code',
    description: `The source code must be suitably elaborated to arrive at a program executable by the processor, thus placing itself as the starting point ("source") of the entire process that leads to the execution of the program by the hardware of the machine, and which can include other steps such as precompilation, compilation, interpretation, loading and linking (depending on the type of programming language used) to finish with the installation.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 500 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} className="step_text">
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={5} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} className="button_reset">
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
