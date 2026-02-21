document.addEventListener('DOMContentLoaded', () => {
    const onboarding = document.getElementById('onboarding');
    
    // 3초 뒤에 사라지기 시작
    setTimeout(() => {
        // 투명도 0으로 변경 (CSS transition 효과)
        onboarding.classList.add('fade-out');
        
        // 애니메이션(0.5초)이 끝난 뒤 요소를 완전히 제거
        setTimeout(() => {
            onboarding.style.display = 'none';
            document.body.style.overflow = 'auto'; // 스크롤 다시 허용
            
            // 여기서 메인 앱 초기화 로직 등을 실행할 수 있습니다.
            console.log("Onboarding complete!");

            // 온보딩 종료 후 main.html로 이동 (히스토리 교체 -> 뒤로가기 불가)
            window.location.replace('./main.html');

        }, 500);
        
    }, 3000);
});