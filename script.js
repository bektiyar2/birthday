document.getElementById("run-code").addEventListener("click", function() {
    let output = document.getElementById("output");
    output.innerHTML = `Traceback (most recent call last):\nFile "<birthday>", line 1, in <module>\nAgeError: Возраст не определён. Девушки всегда 18!`;

    setTimeout(() => {
        output.innerHTML += `\n\nЗапускаем поздравление...\n`;
        
        setTimeout(() => {
            let message = `
name = "Жанара"
age = 18  # значение зафиксировано :)
happiness = 100  

while happiness < 1000:
    happiness += 100
    print(f"{name}, уровень счастья увеличивается! Сейчас: {happiness}!")

print("Поздравляем! Твой день рождения загружен на 100%!")`;

            output.innerHTML += `\n${message}`;
            
            document.getElementById("surprise").classList.remove("hidden");
        }, 2000);
    }, 2000);
});

document.getElementById("surprise").addEventListener("click", function() {
    document.getElementById("cake").classList.remove("hidden");
});