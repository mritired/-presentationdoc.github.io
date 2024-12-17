function scrollToProgram(programId) {
    const programElement = document.getElementById(programId);
    programElement.scrollIntoView({ behavior: 'smooth' });
}
