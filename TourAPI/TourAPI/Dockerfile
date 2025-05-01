# Этап 1: Сборка
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app

COPY TourAPI/TourAPI.csproj .
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o out

# Этап 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app
COPY --from=build /app/out .

EXPOSE 80
ENTRYPOINT ["dotnet", "TourAPI.dll"]
