import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { BarChart, PieChart } from "recharts";
import AWS from "aws-sdk";
import { Button } from "@/components/ui/button";
import { WebView } from "react-native-webview";

// AWS SDK Configuration (Ensure correct credentials & permissions)
AWS.config.update({
  region: "us-east-1", // Change to your AWS region
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "your-identity-pool-id",
  }),
});

const SpendingInsights = () => {
  const [spendingData, setSpendingData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [anomaly, setAnomaly] = useState(null);
  const [quickSightUrl, setQuickSightUrl] = useState("");

  useEffect(() => {
    fetchSpendingData();
    fetchAnomalyDetection();
    fetchQuickSightEmbedUrl();
  }, []);

  const fetchSpendingData = async () => {
    try {
      const lambda = new AWS.Lambda();
      const params = {
        FunctionName: "your-spending-insights-function",
        Payload: JSON.stringify({ userId: "user123" }),
      };
      
      const response = await lambda.invoke(params).promise();
      const result = JSON.parse(response.Payload);
      
      setSpendingData(result.barChartData);
      setPieData(result.pieChartData);
    } catch (error) {
      console.error("Error fetching spending data:", error);
    }
  };

  const fetchAnomalyDetection = async () => {
    try {
      const lambda = new AWS.Lambda();
      const params = {
        FunctionName: "your-anomaly-detection-function",
        Payload: JSON.stringify({ userId: "user123" }),
      };
      
      const response = await lambda.invoke(params).promise();
      const result = JSON.parse(response.Payload);
      
      setAnomaly(result.anomalyDetected);
    } catch (error) {
      console.error("Error fetching anomaly detection data:", error);
    }
  };

  const fetchQuickSightEmbedUrl = async () => {
    try {
      const lambda = new AWS.Lambda();
      const params = {
        FunctionName: "your-quicksight-embed-function",
        Payload: JSON.stringify({ userId: "user123" }),
      };
      
      const response = await lambda.invoke(params).promise();
      const result = JSON.parse(response.Payload);
      
      setQuickSightUrl(result.embedUrl);
    } catch (error) {
      console.error("Error fetching QuickSight embed URL:", error);
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Spending Insights</Text>
      {anomaly && <Text style={{ color: "red" }}>⚠️ Anomaly Detected: {anomaly}</Text>}
      
      <Text style={{ fontSize: 18, marginTop: 10 }}>Spending Trends</Text>
      <BarChart data={spendingData} width={350} height={200} />
      
      <Text style={{ fontSize: 18, marginTop: 10 }}>Category Breakdown</Text>
      <PieChart data={pieData} width={350} height={200} />
      
      <Text style={{ fontSize: 18, marginTop: 10 }}>AI-Powered Insights</Text>
      {quickSightUrl ? (
        <WebView source={{ uri: quickSightUrl }} style={{ height: 400 }} />
      ) : (
        <Text>Loading QuickSight analytics...</Text>
      )}
      
      <Button onPress={fetchSpendingData}>Refresh Data</Button>
    </ScrollView>
  );
};

export default SpendingInsights;
