export interface TestCase {
  name: string;
  input?: string;
  expectedOutput: string;
  /** A main.c file content to compile with the student's file */
  testMain?: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  isExam?: boolean;
  /** Turn-in directory, e.g. "ex00" */
  turnInDir: string;
  /** Expected files inside turnInDir, e.g. ["ft_putchar.c"] */
  expectedFiles: string[];
  /** Validation pipeline type */
  validationType: 'shell' | 'c' | 'manual';
  /** Allowed functions (for display and future static analysis) */
  allowedFunctions?: string[];
  /** Automated test cases */
  testCases?: TestCase[];
  /** Exam duration in minutes (only for isExam: true) */
  examDurationMinutes?: number;
  /** Name of the .md subject file in /data/ (without extension), e.g. "c00" */
  subjectFile?: string;
}

export interface Phase {
  id: string;
  title: string;
  days: string;
  description: string;
  xpRequirement: string;
  gatekeeperExamId?: string;
  exercises: Exercise[];
}

export interface Rules {
  title: string;
  items: string[];
}

/** Result of a single Moulinette validation step */
export interface MoulinetteStep {
  name: string;
  status: 'pass' | 'fail' | 'skip' | 'running';
  output?: string;
}

/** Full Moulinette result for an exercise */
export interface MoulinetteResult {
  exerciseId: string;
  passed: boolean;
  steps: MoulinetteStep[];
  timestamp: string;
}
