function calculateBMI() {

    const weight =
        parseFloat(
            document.getElementById("weight").value
        );

    const heightInput =
        parseFloat(
            document.getElementById("height").value
        );


    // ตรวจสอบข้อมูล

    if (
        isNaN(weight) ||
        isNaN(heightInput) ||
        weight <= 0 ||
        heightInput <= 0
    ) {

        alert(
            "กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง"
        );

        return;
    }


    // แปลงส่วนสูงเป็นเมตร

    const height =
        heightInput / 100;


    // คำนวณ BMI

    const bmi =
        weight /
        (height * height);


    // แสดงข้อมูล

    document.getElementById("bmi")
        .textContent =
        bmi.toFixed(1);

    document.getElementById("showWeight")
        .textContent =
        weight;

    document.getElementById("showHeight")
        .textContent =
        heightInput;


    const status =
        document.getElementById("status");

    const advice =
        document.getElementById("advice");

    const marker =
        document.getElementById("marker");


    /*
       ตำแหน่งของตัวชี้
       15 = จุดเริ่มต้น
       40 = ปกติ
       60 = น้ำหนักเกิน
       80 = อ้วน
    */

    let position;


    if (bmi < 18.5) {

        status.textContent =
            "🟡 น้ำหนักน้อย";

        status.style.background =
            "#b89100";

        advice.textContent =
            "ควรรับประทานอาหารให้ครบ 5 หมู่ " +
            "เน้นอาหารที่มีสารอาหารหลากหลาย " +
            "รับประทานให้เพียงพอต่อความต้องการของร่างกาย " +
            "และพักผ่อนให้เพียงพอ";

        position =
            Math.max(
                2,
                bmi / 18.5 * 25
            );

    }

    else if (bmi < 23) {

        status.textContent =
            "🟢 น้ำหนักปกติ";

        status.style.background =
            "#15945a";

        advice.textContent =
            "รักษาพฤติกรรมที่ดีต่อสุขภาพ " +
            "รับประทานอาหารให้ครบ 5 หมู่ " +
            "เคลื่อนไหวร่างกายอย่างสม่ำเสมอ " +
            "และพักผ่อนให้เพียงพอ";

        position =
            25 +
            ((bmi - 18.5) / 4.5) * 25;

    }

    else if (bmi < 25) {

        status.textContent =
            "🟠 น้ำหนักเกิน";

        status.style.background =
            "#d87517";

        advice.textContent =
            "ลองปรับพฤติกรรมการกิน " +
            "เพิ่มผักและอาหารที่มีประโยชน์ " +
            "ลดอาหารหวาน มัน เค็ม " +
            "และเครื่องดื่มที่มีน้ำตาลสูง " +
            "พร้อมเพิ่มกิจกรรมทางกายอย่างสม่ำเสมอ";

        position =
            50 +
            ((bmi - 23) / 2) * 15;

    }

    else if (bmi < 30) {

        status.textContent =
            "🔴 โรคอ้วนระดับ 1";

        status.style.background =
            "#d93f3f";

        advice.textContent =
            "ควรค่อย ๆ ปรับพฤติกรรมการกิน " +
            "เลือกอาหารที่มีคุณค่าทางโภชนาการ " +
            "ลดอาหารและเครื่องดื่มที่มีน้ำตาลสูง " +
            "และเพิ่มกิจกรรมทางกายอย่างเหมาะสม";

        position =
            65 +
            ((bmi - 25) / 5) * 15;

    }

    else {

        status.textContent =
            "🟣 โรคอ้วนระดับ 2";

        status.style.background =
            "#7446b8";

        advice.textContent =
            "ควรปรับพฤติกรรมการกินและกิจกรรมทางกาย " +
            "อย่างค่อยเป็นค่อยไป " +
            "หลีกเลี่ยงการลดน้ำหนักแบบหักโหม " +
            "และหากกังวลเรื่องสุขภาพควรปรึกษาผู้เชี่ยวชาญ";

        position = 90;
    }


    // จำกัดตัวชี้ไม่ให้หลุดแถบ

    position =
        Math.min(98, Math.max(2, position));


    marker.style.left =
        position + "%";


    // Animation

    const result =
        document.querySelector(".result");

    result.animate(
        [
            {
                opacity: 0.4,
                transform: "translateY(8px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 500,
            easing: "ease-out"
        }
    );
}



function resetBMI() {

    document.getElementById("weight")
        .value = "";

    document.getElementById("height")
        .value = "";

    document.getElementById("bmi")
        .textContent = "--";

    document.getElementById("showWeight")
        .textContent = "--";

    document.getElementById("showHeight")
        .textContent = "--";

    document.getElementById("status")
        .textContent =
        "รอการคำนวณ";

    document.getElementById("status")
        .style.background =
        "rgba(255,255,255,.1)";

    document.getElementById("advice")
        .textContent =
        "กรอกข้อมูลเพื่อรับคำแนะนำ";

    document.getElementById("marker")
        .style.left = "0%";
}