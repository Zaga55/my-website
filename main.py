import random

print("ЧЕГО СКАЗАТЬ-ТО ХОТЕЛ, МИЛОК?!")

poka_count = 0

while True:
    user_input = input("Я: ").strip()
    
  
    if user_input.lower() == "Кто самый лучший преподаватель?":
        print("Конечно же Нариман Ибрагимович")
        poka_count = 0
        continue


    if user_input.isupper():                   
        if user_input == "ПОКА!":
            poka_count += 1
            if poka_count == 3:
                print("ДО СВИДАНИЯ, МИЛЫЙ!")
                break
            else:
                year = random.randint(1930, 1950)
                print(f"НЕТ, НИ РАЗУ С {year} ГОДА!")
        else:                                     
            poka_count = 0
            year = random.randint(1930, 1950)
            print(f"НЕТ, НИ РАЗУ С {year} ГОДА!")
    else:                                        
        poka_count = 0
        print("АСЬ?! ГОВОРИ ГРОМЧЕ, ВНУЧЕК!")