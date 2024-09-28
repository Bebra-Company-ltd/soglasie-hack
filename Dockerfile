# Используем базовый образ с JDK и Maven для сборки и запуска
FROM maven:3.8.5-openjdk-17-slim AS build
WORKDIR /app

# Копируем pom.xml и загружаем зависимости (используем кэш)
COPY pom.xml .
RUN mvn dependency:go-offline

# Копируем исходный код приложения
COPY src ./src

# Сборка приложения
RUN mvn clean package -DskipTests

# Второй этап - запускаем приложение с JDK
FROM openjdk:17-jdk-slim
WORKDIR /app

# Копируем собранный .jar файл из предыдущего этапа
COPY --from=build /app/target/SoglasieHack-0.0.1-SNAPSHOT.jar ./app.jar

# Запускаем приложение
ENTRYPOINT ["java", "-jar", "./app.jar"]
